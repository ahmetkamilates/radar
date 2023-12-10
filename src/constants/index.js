export const options = {
    method: 'GET',
    url: 'https://flight-radar1.p.rapidapi.com/flights/list-in-boundary',
    params: {
      bl_lat: '34.02369',
      bl_lng: '27.406082',
      tr_lat: '42.970403',
      tr_lng: '44.761821',
      limit: '300'
    },
    headers: {
      'X-RapidAPI-Key': '14be89abf3msh4b7d3c8f5da3c01p12a62ajsn9d5a560d459a',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };
  const options2 = {
  
    headers: {
      'X-RapidAPI-Key': '14be89abf3msh4b7d3c8f5da3c01p12a62ajsn9d5a560d459a',
      'X-RapidAPI-Host': 'flight-radar1.p.rapidapi.com'
    }
  };
  