const spaceId = 'yc00yopxi6mr';
const environmentId = 'master';
const accessToken = 'MwkVAR_g_LN5gMdYoRCI4-qN3VtRfsRw28MOZWCywJA';

// Get entry ID from URL query string
const params = new URLSearchParams(window.location.search);
const entryId = params.get('id');

if (!entryId) {
  document.getElementById('preview').innerHTML = `<p>No entry ID provided in URL.</p>`;
} else {
  const url = `https://preview.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries/${entryId}?access_token=${accessToken}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      const fieldValue = data.fields.Preablebody['en-US']; // Adjust locale if needed
      document.getElementById('preview').innerHTML = `<p>${fieldValue}</p>`;
    })
    .catch(error => {
      console.error('Error fetching entry:', error);
      document.getElementById('preview').innerHTML = `<p>Error loading preview.</p>`;
    });
}
