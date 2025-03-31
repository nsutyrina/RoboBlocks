Matthew Bolduc A/B Testing 

A/B Test Name:
Introduction Message – Friendly vs. Polite Tone

User Story Number:
US3 – User Onboarding and Personalization

Metrics (HEART Framework):
Engagement: Time spent on onboarding screen, number of users who reply to the introduction prompt.
Adoption: Percentage of users completing the onboarding flow.
Retention: Returning users within the first 3 days after onboarding.
Happiness: Optional post-onboarding satisfaction survey (if available).

Hypothesis:
If we use a slightly more polite and complete greeting ("Hi! My name is Rob! Nice to meet you! What's your name?"), users will feel more welcomed and be more likely to engage with the onboarding process compared to a shorter message ("Hi! My name is Rob! What's your name?").

What problem are we trying to solve?
Problem: During onboarding, we noticed a drop-off in engagement at the first prompt when the chatbot introduced itself. A significant percentage of users do not respond or exit before completing the onboarding.
Impact: This affects user personalization and engagement since the chatbot doesn’t gather basic user data early in the journey. Without a successful introduction, the rest of the flow may feel impersonal, leading to lower retention.
Bottleneck Identified: Users are not responding to the chatbot’s initial greeting.
Narrowed Hypothesis: We believe that a warmer, more polite tone may increase trust and user willingness to respond.

Experiment:
Platform: Firebase Remote Config + Firebase Analytics.
Audience: 100% of new users in the onboarding flow.
Group A (Control): 50% of users see the message: “Hi! My name is Rob! What’s your name?”
Group B (Variant): 50% of users see the message: “Hi! My name is Rob! Nice to meet you! What’s your name?”
Firebase Setup:
Remote Config: To dynamically serve the message variation.
Analytics Events to Track:
onboarding_greeting_shown
onboarding_name_entered
onboarding_completed
onboarding_time_spent
Optional: onboarding_user_sentiment (post-onboarding survey)
Tracking Metrics:
Compare response rate (users who enter their name) between the two groups.
Track overall onboarding completion rate and time to complete.
Retention after 1–3 days post-onboarding.

Variations:
Control (A):
Message:
“Hi! My name is Rob! What’s your name?”
Variant (B):
Message:
“Hi! My name is Rob! Nice to meet you! What’s your name?”
Design Work:
The visual UI remains the same; only the chatbot message text changes. Below is a basic mockup representation:
Variation
Message Displayed
A (Control)
💬 Hi! My name is Rob! What’s your name?
B (Variant)
💬 Hi! My name is Rob! Nice to meet you! What’s your name?

____________________________________________________________________________________________________________________________________________________________________
