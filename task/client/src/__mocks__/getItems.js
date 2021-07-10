//this is a mock test for checking if the api gets the items

testingTheProject = () => {
    fetch('/api/coldplay')
    .then(res => res.json())
    .then(
      items => {
        console.log("items", items.items.results);
        this.setState({ items: items.items.results }, () =>
          console.log("items fetched", items.items.results)
        );
      },
      error => {
        this.setState({
          ERROR
        });
      }
    );
}

//