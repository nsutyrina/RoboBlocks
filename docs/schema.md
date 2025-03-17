# 305Soft NoSQL Database Schema

## Collections and Documents

### 1. Collection: users
- Description: Stores user account and profile information.
- Document ID: Firebase Authentication UID (used as the document ID).

Fields:
| Field Name     | Data Type | Description                                      |
|----------------|-----------|--------------------------------------------------|
| email          | string    | User’s email address                             |
| display_name   | string    | User’s chosen display name                       |
| photo_url      | string    | Path to the user’s profile image                 |
| uid            | string    | User’s unique ID from Firebase Auth             |
| created_time   | timestamp | The date and time when the account was created  |
