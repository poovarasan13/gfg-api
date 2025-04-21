# Live Demo :https://poovarasan13.github.io/gfg-api/
**
#Screenshots**
![image](https://github.com/user-attachments/assets/374e6360-7899-4160-bd83-e22bd30366b6)

# GeeksforGeeks Profile Fetcher

## Description
This project is a simple Node.js application that fetches profile information from GeeksforGeeks using the official GeeksforGeeks API. It allows you to retrieve various details from a user's profile, such as the number of articles, rank, and other relevant statistics.

The project utilizes **Axios** for making HTTP requests and **JavaScript**'s `async/await` for handling asynchronous operations.

## Features
- Fetch user profile data from GeeksforGeeks.
- Handle errors gracefully with appropriate messages.
- Retrieve useful profile statistics such as rank, article count, etc.
- Asynchronous data retrieval using `async/await` for smooth and efficient operations.

## API Used
- **GeeksforGeeks User Profile API**: 
  The API endpoint fetches user profile details like article count, rank, etc.

  API URL format:
  ```
  https://authapi.geeksforgeeks.org/api-get/user-profile-info/?handle={username}&article_count=false&redirect=true
  ```

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Siranjeevi619/gfg-profile-fetcher.git
   cd gfg-profile-fetcher
   ```

2. **Install dependencies:**
   This project uses **Axios** to make HTTP requests. Install the necessary dependencies using `npm`:
   ```bash
   npm install
   ```

3. **Run the application:**
   Start the application by running:
   ```bash
   node index.js
   ```

## Usage

1. **Fetch Profile Data:**
   Modify the `userName` parameter in the `profileData` function to the desired GeeksforGeeks profile username.
   Example: `"siranjeevi0619"`.

2. **Log Profile Information:**
   The profile information will be logged to the console when the `profileData` function resolves the data.

## Example Output

```json
{
  "handle": "siranjeevi0619",
  "rank": "3-Star",
  "article_count": "15",
  "solved_problem_count": "300",
  "score": "1200"
}
```

## Contributing
If you'd like to contribute to this project:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-name`).
5. Open a Pull Request.

## License
This project is open-source and available under the [MIT License](LICENSE).

## Contact
For more information, contact [Siranjeevi](mailto:siranjeevi0619@example.com).
