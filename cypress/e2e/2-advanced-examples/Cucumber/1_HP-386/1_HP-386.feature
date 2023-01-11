Feature: Trade in - Button landing page

	#*Acceptance criteria:* 
	#
	#* A green circle CTA should be displayed on the 2nd section and it should match the design below. 
	#* Clicking on it should take to the selection page (top).
	@TEST_HP-386
	Scenario: Trade in - Button landing page
		Given I am in the landing page
		When I click on the green CTA on the 2nd section
		Then it should take to the selection page (top).
		And it should match with the design: https://www.figma.com/file/xA0G1BZ0vu0Xs0nKHYdQJk/Platinum-(PaaS)-MVP?node-id=8428%3A37406
