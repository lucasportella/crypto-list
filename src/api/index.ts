const request = async (route: string, type: string) => {
  try {
    const response = await fetch(route, {
      method: type,
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return error
  }
}
export default request