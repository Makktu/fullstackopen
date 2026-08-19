sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Types "My new note" into the text field
    User->>Browser: Clicks the 'Submit' button

    Note over Browser: 3. JS (spa.js) handles event, creates note data object locally.
    Note over Browser: 4. JS IMMEDIATELY appends note to DOM, clearing input field (optimistic update).

    Browser->>Server: HTTP POST request (Body: JSON note data) to /api/notes
    Note over Server: Server adds note to data store.
    Server-->>Browser: HTTP response status code 201 (Created) / (Confirmation or new note ID)

    Note over Browser: 7. JS handles response, finalizes DOM if needed, provides user feedback.
