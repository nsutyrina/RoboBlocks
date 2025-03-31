# **A/B Test Name:** Block Coding UI: Drag & Drop vs. Button Selection

**User Story Number:** US4 (Control the Robot)

**Metrics:**
- Engagement (time spent in the block coding interface)
- Task Completion Rate (successful program execution)
- Retention (return rate within 7 days)
- Usability Score (post-task survey results)

**Hypothesis:**
We believe that a drag-and-drop block coding interface will result in higher engagement and task completion rates compared to a button-selection method, as it provides a more intuitive and interactive experience for users.

**What problem are we trying to solve?**
Currently, users need an intuitive way to assemble code blocks to program the robot. A common challenge is that some users find traditional button-based coding interfaces difficult to navigate, leading to frustration and abandonment. By testing drag-and-drop against button selection, we aim to determine which approach enhances user experience, particularly for younger users or those new to programming.

**Experiment:**
We will run an A/B test using Firebase Remote Config to randomly assign new users to one of two UI variations:
- **Group A (Control):** Users interact with a button-selection interface where they tap buttons to add blocks to their program.
- **Group B (Variant):** Users interact with a drag-and-drop interface, allowing them to move blocks freely onto a workspace.

Tracking will be implemented using Firebase Analytics to measure:
- Session duration on the block coding screen
- Number of successfully uploaded programs to the robot
- Number of users returning within 7 days
- User feedback collected via a post-task survey embedded in the app

**Variations:**
- **Control (Button Selection):** Users tap buttons corresponding to programming commands, which are then added in sequence to a list.
- **Variant (Drag-and-Drop):** Users drag coding blocks from a toolbar onto a workspace, where they can arrange them before executing the program.

Design mockups and UI flows will be attached to visualize both interfaces before deployment.



# A/B Test Name: Introduction Message
User Story Number: US6
As a user, I want to feel welcomed and engaged by the initial message so that I’m more likely to respond and continue the conversation.

Metrics:
Response rate to the initial message
Time to first response
Engagement rate (continued conversation beyond initial reply)

Hypothesis:
If we add a polite social cue like "Nice to meet you!" to the initial message, users will feel more welcomed and be more likely to respond, increasing the response rate.

Experiment:
We ran an A/B test comparing two different greeting messages in a conversational interface.

Variations:
Variation A (Control): "Hi! My name is Rob! What's your name?"
Variation B (Test): "Hi! My name is Rob! Nice to meet you! What's your name?"

# A/B Test Name:  
User Story Number:
Metrics:  
Hypothesis:  
Experiment:
Variations:

# A/B Test Name: Homepage Background Color – Light vs. Dark Mode

**User Story Number:** US4: Home Page UI

**Metrics:**
- Engagement: Time spent on the homepage.
- Adoption: Click-through rate (CTR) on key elements (e.g., CTA buttons, navigation links).
- Retention: Return visits within a defined period.

**Hypothesis:**
Switching to a dark-themed background may enhance contrast, reduce eye strain, and increase engagement with key elements on the homepage, leading to longer time spent and higher interaction rates.

**Experiment:**
- 50% of users see the current light background (Control - #f8efe1).
- 50% of users see a dark background (Test - #2A2A36).
- The experiment will run for two weeks with statistical significance set at a 95% confidence level.

**Variations:**
- A (Control): Light background with standard branding.
- B (Test): Dark background with adjusted typography and UI contrast for readability.

# A/B Test Name: Sign In Button Color – Red vs. Green

**User Story Number:** US1 – User Account Creation

**Metrics:**  
- Engagement: Number of clicks on the Sign In button  
- Task Success: Number of successful sign-ins  

**Hypothesis:**  
If the Sign In button is changed from red to green, users will be more likely to click it and complete sign-in because green is commonly associated with positive actions like "go".

**Experiment:**  
Split users into two groups:  
- **Group A:** Sign In button remains red (#FF4C4C)  
- **Group B:** Sign In button is changed to green (#34A853)

**Variations:**  
- **Variation A:** Red Sign In button (current version)  
- **Variation B:** Green Sign In button (test version)

