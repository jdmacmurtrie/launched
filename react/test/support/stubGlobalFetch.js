let stubGlobalFetch = (urlOptions) => {
  let stubbedUrls = Object.keys(urlOptions);

  spyOn(global, 'fetch').and.callFake((url, payload) => {
    let fixture;
    let responseCode = 200;

    stubbedUrls.map((stubbedUrl) => {
      if(url.endsWith(stubbedUrl)) {
        let result = urlOptions[stubbedUrl];

        if(result.constructor == Object){
          if(payload.method) {
            let options = result[payload.method];

            if (Array.isArray(options)) {
              fixture = options[0];
              responseCode = options[1];
            } else {
              fixture = options
            }
          } else {
            fixture = result["GET"];
          }
        } else {
          console.log(`please be sure to set your URL target as an object with
          keys that represent the HTTP verb to stub, and values either the string
          for the fixture file to return, or an array with said string and the
          http status code that the stub should return.`);
        }
      }
    });
    return createFetchResponseFromFixture(fixture, responseCode);
  });
}

export default stubGlobalFetch;
