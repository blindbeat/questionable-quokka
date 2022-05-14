export const getItems = async () => {
  const response = await fetch('https://fortnite-api.com/v2/cosmetics/br/new');
  if (!response.ok) {
    throw new Error('Oooops');
  }

  const { data: { items } } = await response.json();

  return items
}