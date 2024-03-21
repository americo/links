const apiKey = process.env.BEEHIIV_API_KEY;
const publicationId = process.env.BEEHIVE_PUBLICATION_ID;

export const getSubscriptions = async () => {
    const response = await fetch(`https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
    });

    return response.json();
};

export const createSubscription = async (email: string) => {
    const response = await fetch(`https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "email": email,
        "reactivate_existing": false,
        "send_welcome_email": true,
        "utm_source": "AmericoJuniorSite",
        "utm_medium": "organic",
        "referring_site": "americojunior.com/newsletter"
      })
    });
  
    return response;
  };