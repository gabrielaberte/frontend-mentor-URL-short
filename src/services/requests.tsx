export const BASE_URL = 'https://api.shrtco.de/v2/';

export async function getShortLink(longLink: string) {
  try {
    const response = await fetch(`${BASE_URL}shorten?url=${longLink}`)

    return await response.json()
  } catch (error) {
    console.error(error)
  }
}