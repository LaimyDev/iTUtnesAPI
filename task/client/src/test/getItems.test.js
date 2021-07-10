//mock test to check fetch function
//async/await to test fetch function 

test('result count should be 50', async () => {
    const term = "coldplay";
    const api_call = await 
    fetch(`https://itunes.apple.com/search?term=${term}`);
      const data = await api_call.json();
    expect(data.resultCount).toBe(50);
});

//test for error also
test('the fetch fails with an error', async () => {
  try {
    const term = "coldplay";
    await  fetch(
      `https://itunes.apple.com/search?term=${term}`
    );
  } catch (e) {
    expect(e).toMatch('error');
  }
});