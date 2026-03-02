import requests
import json
import sys
import time
from datetime import datetime, timezone

class FounderPlaneAPITester:
    def __init__(self, base_url="https://greeting-portal-52.preview.emergentagent.com"):
        self.base_url = base_url
        self.admin_password = "founderplane2024"
        self.tests_run = 0
        self.tests_passed = 0
        self.test_results = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint.lstrip('/')}"
        test_headers = {'Content-Type': 'application/json'}
        if headers:
            test_headers.update(headers)

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=test_headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=test_headers, timeout=10)
            elif method == 'PATCH':
                response = requests.patch(url, json=data, headers=test_headers, timeout=10)

            success = response.status_code == expected_status
            
            result = {
                'name': name,
                'method': method,
                'endpoint': endpoint,
                'expected_status': expected_status,
                'actual_status': response.status_code,
                'success': success,
                'url': url
            }

            if success:
                self.tests_passed += 1
                print(f"✅ PASSED - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    result['response_data'] = response_data
                    print(f"   Response: {json.dumps(response_data, indent=2)[:200]}...")
                except:
                    result['response_data'] = response.text[:200]
                    print(f"   Response: {response.text[:200]}...")
            else:
                print(f"❌ FAILED - Expected {expected_status}, got {response.status_code}")
                try:
                    error_data = response.json()
                    result['error_data'] = error_data
                    print(f"   Error: {json.dumps(error_data, indent=2)}")
                except:
                    result['error_data'] = response.text
                    print(f"   Error: {response.text}")

            self.test_results.append(result)
            return success, response.json() if success else {}

        except Exception as e:
            print(f"❌ FAILED - Network Error: {str(e)}")
            result = {
                'name': name,
                'method': method,
                'endpoint': endpoint,
                'expected_status': expected_status,
                'actual_status': 'ERROR',
                'success': False,
                'error': str(e),
                'url': url
            }
            self.test_results.append(result)
            return False, {}

    def test_health_check(self):
        """Test backend health endpoint"""
        return self.run_test("Health Check", "GET", "/health", 200)

    def test_api_root(self):
        """Test API root endpoint"""
        return self.run_test("API Root", "GET", "/api/", 200)

    def test_admin_login_success(self):
        """Test admin login with correct password"""
        return self.run_test(
            "Admin Login (Success)",
            "POST",
            "/api/admin/login",
            200,
            data={"password": self.admin_password}
        )

    def test_admin_login_failure(self):
        """Test admin login with wrong password"""
        return self.run_test(
            "Admin Login (Failure)",
            "POST", 
            "/api/admin/login",
            401,
            data={"password": "wrongpassword"}
        )

    def test_create_lead(self):
        """Test lead creation"""
        lead_data = {
            "name": f"Test User {int(time.time())}",
            "email": f"test{int(time.time())}@example.com",
            "phone": "+1234567890",
            "company": "Test Company",
            "stage": "Launch",
            "service_interest": "BoltGuider",
            "source_page": "Homepage Test",
            "message": "This is a test lead from automated testing"
        }
        
        success, response = self.run_test(
            "Create Lead",
            "POST",
            "/api/leads",
            201,
            data=lead_data
        )
        return success, response

    def test_get_leads_unauthorized(self):
        """Test getting leads without admin password"""
        return self.run_test(
            "Get Leads (Unauthorized)",
            "GET",
            "/api/leads",
            401
        )

    def test_get_leads_authorized(self):
        """Test getting leads with admin password"""
        return self.run_test(
            "Get Leads (Authorized)",
            "GET",
            "/api/leads",
            200,
            headers={"X-Admin-Password": self.admin_password}
        )

    def test_get_lead_stats(self):
        """Test lead statistics endpoint"""
        return self.run_test(
            "Get Lead Stats",
            "GET",
            "/api/leads/stats",
            200,
            headers={"X-Admin-Password": self.admin_password}
        )

    def test_update_lead_status(self, lead_id):
        """Test updating lead status"""
        return self.run_test(
            "Update Lead Status",
            "PATCH",
            f"/api/leads/{lead_id}/status",
            200,
            data={"status": "Contacted"},
            headers={"X-Admin-Password": self.admin_password}
        )

    def test_stage_assessment_invalid_key(self):
        """Test stage assessment with potentially invalid LLM key"""
        assessment_data = {
            "answers": {
                "current_situation": "just_started",
                "hardest_right_now": "finding_customers",
                "business_direction": "clear_vision",
                "dependency": "founder_does_everything",
                "scale_readiness": "not_ready",
                "decision_bottleneck": "lack_of_data",
                "intent": "scale_up"
            },
            "user_details": {
                "name": "Test Founder",
                "email": f"test{int(time.time())}@example.com",
                "phone": "+1234567890"
            }
        }
        
        print(f"⚠️  Warning: This test may fail if EMERGENT_LLM_KEY is invalid or rate limited")
        return self.run_test(
            "Stage Assessment (AI)",
            "POST",
            "/api/stage-assessment",
            200,  # Expect success, but may fail with 500 if LLM key issues
            data=assessment_data
        )

    def test_scroll_analytics(self):
        """Test scroll analytics endpoints"""
        # Test scroll event creation
        scroll_event = {
            "page": "Index",
            "section": "Hero",
            "section_index": 1,
            "total_sections": 5,
            "session_id": f"test-session-{int(time.time())}",
            "viewport_height": 1080
        }
        
        success1, _ = self.run_test(
            "Create Scroll Event",
            "POST",
            "/api/analytics/scroll-events",
            201,
            data=scroll_event
        )
        
        # Test batch scroll events
        batch_events = [scroll_event, scroll_event]
        success2, _ = self.run_test(
            "Create Batch Scroll Events",
            "POST",
            "/api/analytics/scroll-events/batch",
            201,
            data=batch_events
        )
        
        # Test scroll stats
        success3, _ = self.run_test(
            "Get Scroll Stats",
            "GET",
            "/api/analytics/scroll-stats?days=7",
            200,
            headers={"X-Admin-Password": self.admin_password}
        )
        
        return success1 and success2 and success3

    def run_all_tests(self):
        """Run all API tests"""
        print("🚀 Starting FounderPlane API Tests...")
        print("=" * 50)
        
        # Basic connectivity tests
        self.test_health_check()
        self.test_api_root()
        
        # Admin authentication tests  
        self.test_admin_login_success()
        self.test_admin_login_failure()
        
        # Lead management tests
        lead_success, lead_response = self.test_create_lead()
        lead_id = lead_response.get('id') if lead_success else None
        
        self.test_get_leads_unauthorized()
        self.test_get_leads_authorized()
        self.test_get_lead_stats()
        
        if lead_id:
            self.test_update_lead_status(lead_id)
        
        # Analytics tests
        self.test_scroll_analytics()
        
        # AI assessment test (may fail if LLM key issues)
        self.test_stage_assessment_invalid_key()
        
        # Print summary
        print("\n" + "=" * 50)
        print(f"📊 Test Summary: {self.tests_passed}/{self.tests_run} tests passed")
        
        failed_tests = [result for result in self.test_results if not result['success']]
        if failed_tests:
            print(f"\n❌ Failed Tests ({len(failed_tests)}):")
            for test in failed_tests:
                print(f"   • {test['name']}: {test.get('actual_status', 'ERROR')}")
                if 'error' in test:
                    print(f"     Error: {test['error']}")
                elif 'error_data' in test:
                    print(f"     Error: {test['error_data']}")
        
        # Identify critical issues
        critical_issues = []
        
        # Check if basic connectivity is working
        health_test = next((t for t in self.test_results if t['name'] == 'Health Check'), None)
        if not health_test or not health_test['success']:
            critical_issues.append("Backend server is not responding to health checks")
            
        api_test = next((t for t in self.test_results if t['name'] == 'API Root'), None)  
        if not api_test or not api_test['success']:
            critical_issues.append("API root endpoint not accessible")
        
        # Check if admin login works
        admin_test = next((t for t in self.test_results if t['name'] == 'Admin Login (Success)'), None)
        if not admin_test or not admin_test['success']:
            critical_issues.append("Admin login not working with correct password")
            
        # Check if lead creation works
        lead_test = next((t for t in self.test_results if t['name'] == 'Create Lead'), None)
        if not lead_test or not lead_test['success']:
            critical_issues.append("Lead creation endpoint not working")
        
        if critical_issues:
            print(f"\n🚨 CRITICAL ISSUES FOUND ({len(critical_issues)}):")
            for issue in critical_issues:
                print(f"   • {issue}")
            return 1
        
        # Check success rate
        success_rate = (self.tests_passed / self.tests_run) * 100
        print(f"\n📈 Success Rate: {success_rate:.1f}%")
        
        if success_rate < 70:
            print("⚠️  Warning: Success rate below 70%, significant issues detected")
            return 1
        elif success_rate < 90:
            print("⚠️  Warning: Some issues detected, but core functionality working")
            return 0
        else:
            print("✅ All critical functionality working properly")
            return 0

def main():
    print(f"🔧 Testing FounderPlane Backend API")
    print(f"📅 Test run: {datetime.now(timezone.utc).isoformat()}")
    
    tester = FounderPlaneAPITester()
    return tester.run_all_tests()

if __name__ == "__main__":
    sys.exit(main())