[HEART Framework](https://docs.google.com/presentation/d/1e80fD_YXKsReUG2ssvwgcRTInoVr0zXm75WdJcx4J7s/edit#slide=id.gc8216bd24_20_0)

# 1. Net Promoter Score (NPS)
User Story:
 AS a product owner,
 I WANT to collect the Net Promoter Score (NPS),
 SO THAT I can measure user satisfaction and identify areas for improvement.
SCENARIO: NPS Collection
 GIVEN the app is being used by active users,
 WHEN users complete specific milestones or surveys,
 THEN they should be prompted to provide their NPS score,
 AND the NPS data should be collected and stored in Firebase for analysis.

Backend Implementation:
- At the end of the "Golden Path" (e.g., after completing a tutorial or reaching a certain milestone), users will be prompted with an NPS question (e.g., "How likely are you to recommend our app?").
- This data will be collected within FlutterFlow via a form or popup.
- The response will be stored in Firebase Firestore, associated with the user's account.
- Firebase Analytics can be used to log NPS events for additional analysis on the user's behavior post-submission.

# 2. New Users Per Day
User Story:
 AS a product owner,
 I WANT to track new users per day,
 SO THAT I can measure the growth of the app's user base.
SCENARIO: New Users Per Day Metric
 GIVEN a user is signing up for the app,
 WHEN they successfully create a new account,
 THEN the new user count should be incremented,
 AND the total number of new users per day should be displayed in the app’s analytics dashboard.

Backend Implementation:
- Firebase Authentication provides a clear event for new user sign-ups.
- When a new user signs up, we log the event in Firebase Analytics with a "new_user_signup" event.
- Firebase Firestore will store the sign-up date and any additional user attributes.
- To track new users per day, Firebase Analytics will aggregate the "new_user_signup" event by date.
- You can also use Firestore queries to retrieve and display the number of users who signed up on a particular day.

# 3. Logins Per Day
User Story:
 AS a product owner,
 I WANT to track the number of logins per day,
 SO THAT I can analyze user engagement and app usage patterns.
SCENARIO: Logins Per Day Metric
 GIVEN users are logging into the app,
 WHEN a user logs in,
 THEN the login event should be recorded with a timestamp,
 AND the total number of logins per day should be available in the app's analytics dashboard.

Backend Implementation:
- Firebase Authentication already tracks user logins, so when a user logs in via Firebase, we can trigger a custom event.
- In FlutterFlow, the onLogin trigger records custom events (e.g., "user_login").
- This event will be logged in Firebase Analytics, including a timestamp of the login.
- The total logins per day can be aggregated in Firebase using Firestore or Firebase Analytics to calculate and display in your app’s dashboard.

# 4. Retention
User Story:
 AS a product owner,
 I WANT to track user retention rates,
 SO THAT I can evaluate how well the app is keeping users engaged over time.
SCENARIO: User Retention Metric
 GIVEN a user has logged into the app previously,
 WHEN the app is opened again after a set period (e.g., 7 days),
 THEN the retention rate for that user should be recorded,
 AND the app should provide retention data for analysis to determine the percentage of returning users.

Backend Implementation:
- Firebase Authentication tracks user login dates, which we can leverage to measure retention.
- When a user logs in, we capture the timestamp of the last login in Firestore.
- To track retention, compare the current login date to the last login date stored in the user's document in Firestore.
- For retention analysis (e.g., 7-day, 30-day retention), this data will be aggregated in Firebase Analytics or custom queries in Firestore.

# 5. Clickthrough Rate (CTR)
User Story:
AS a product owner,
I WANT to measure the effectiveness of app features and promotions,
SO THAT I can evaluate user interest and engagement with content.

SCENARIO: Clickthrough Rate (CTR) Metric
GIVEN the app features buttons, links, or promotional content,
WHEN a user clicks on a featured element (e.g., button, ad, or banner),
THEN the click event should be tracked,
AND the CTR should be calculated to assess user engagement.

Backend Implementation:
- Each clickable element in the app will have a unique event identifier (e.g., "button_click," "ad_click").
- The click events will be logged using Firebase Analytics to capture user interactions.
- Firebase Analytics will allow you to calculate the CTR by dividing the number of clicks by the number of impressions (views or opportunities to click).
- Custom reports can be created in Firebase Analytics to evaluate CTR for different elements or promotions across various time frames.

# 6. Connecting the Robot to Bluetooth
User Story:
AS a product owner,
I WANT to track lesson completion rates,
SO THAT I can measure how effectively users are engaging with and completing lessons.

SCENARIO: Lesson Completion Metric
GIVEN a user is taking lessons in the app,
WHEN they complete a lesson,
THEN the completion status of that lesson should be recorded,
AND the app should display lesson completion data to track the percentage of users completing each lesson.

Backend Implementation:
- As users progress through a lesson on connecting the robot (Lesson 0 in the app), FlutterFlow can trigger events when a lesson is completed (e.g., using a "lesson_completed" event on a button).
- Firebase Analytics or Firestore will capture and store this event along with lesson-specific data (e.g., lesson name, completion timestamp).
- This data will be used to calculate lesson completion rates by analyzing the percentage of users completing lessons in a given period.
- Firebase Analytics or Firestore queries can be used to aggregate and display the completion data on your dashboard.

