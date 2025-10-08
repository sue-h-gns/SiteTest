const spaceId = 'yc00yopxi6mr';
const environmentId = 'master'; // or your custom environment
const accessToken = 'MwkVAR_g_LN5gMdYoRCI4-qN3VtRfsRw28MOZWCywJA';
const entryId = '4iWVr8MGIrIKVgRCotwLq0'; // Replace with the actual entry ID

const url = `https://preview.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries/${entryId}?access_token=${accessToken}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const fieldValue = data.fields.Preablebody['en-US']; // Adjust locale if needed
    document.getElementById('preview').innerHTML = `<p>${fieldValue}</p>`;
  })
  .catch(error => {
    console.error('Error fetching entry:', error);
    document.getElementById('preview').innerHTML = `<p>Error loading preview.</p>`;
  });
