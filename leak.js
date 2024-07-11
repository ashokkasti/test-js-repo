process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// The URL to which you want to make the POST request
const url = 'https://vbirmock.free.beeceptor.com';

// The data you want to send in the request body
const data = {
  GH: 'ghp_DEFzmg7RHrQ2eMe2IF4NxNWQodYpab3VMXXX',
};

// Options for the fetch call
const options = {
  method: 'POST', // HTTP method
  headers: {
    'Content-Type': 'application/json' // Content type
  },
  body: JSON.stringify(data) // Convert the data to JSON string
};

// Make the POST request
fetch(url, options)
  .then(response => {
    return response
  })
  .then(data => {
    console.log('Success:'); // Handle the response data
  })
  .catch(error => {
    console.error('Error:', error); // Handle any errors
  });