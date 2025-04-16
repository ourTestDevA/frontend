# Hotelbeds API Integration Documentation

## General Overview

This documentation provides a comprehensive guide to integrating with the Hotelbeds API using a Spring Boot backend. The integration allows you to check hotel availability by sending requests to the Hotelbeds API. The backend is implemented in Java and uses the Spring framework to handle HTTP requests and responses.

## Quick Start Guide

### Prerequisites

- Java Development Kit (JDK) 8 or higher
- Maven
- Git
- An IDE such as IntelliJ IDEA or Eclipse
- Hotelbeds API credentials (API Key and Secret)

### Running the Backend Server Locally

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. **Configure API Credentials**

   Open `HotelbedsController.java` and replace the placeholders for `apiKey` and `secret` with your actual Hotelbeds API credentials.

3. **Build the Project**

   Navigate to the project root directory and run:

   ```bash
   mvn clean install
   ```

4. **Run the Server**

   Start the Spring Boot application:

   ```bash
   mvn spring-boot:run
   ```

   The server will start on port 5000 by default.

### Running the Backend Server Remotely

1. **Deploy to a Remote Server**

   - Package the application:

     ```bash
     mvn package
     ```

   - Transfer the generated JAR file to your remote server.

2. **Run the JAR File**

   On the remote server, execute:

   ```bash
   java -jar target/demo-0.0.1-SNAPSHOT.jar
   ```

   Ensure that port 5000 is open and accessible.

### Running the Frontend Locally and Remotely

This documentation assumes that the frontend is a separate application. Please refer to the frontend's specific documentation for setup instructions.

### Testing Options

Integration tests are available in the `integration_tests.py` file. To run these tests, ensure you have Python installed along with the necessary dependencies.

1. **Install Dependencies**

   ```bash
   pip install -r requirements.txt
   ```

2. **Run Tests**

   ```bash
   python integration_tests.py
   ```

### Troubleshooting Guide

- **Issue: API Key or Secret Not Working**

  Ensure that the API Key and Secret are correctly configured in `HotelbedsController.java`. Double-check for any typos or whitespace issues.

- **Issue: Server Not Starting**

  Verify that port 5000 is not in use by another application. Check the logs for any error messages during startup.

- **Issue: Gateway Timeout**

  If you encounter a 504 Gateway Timeout error, ensure that your network connection is stable and that the Hotelbeds API endpoint is reachable.

## Support Contact Information

For support related to this integration, please contact:

- **Email:** support@example.com
- **Phone:** +1-800-555-0199

## Links to API Provider Documentation

For more information on the Hotelbeds API, please refer to the official documentation:

- [Hotelbeds API Documentation](https://developer.hotelbeds.com/documentation/hotels/overview)

This documentation provides detailed information on API endpoints, request/response formats, and authentication methods.