function parseStr(templates, ...rest) {
  const result = templates[0]
    .split("\n")
    .filter(Boolean)
    .map((a) => a.trim())
    .reduce((acc, a) => {
      // const colonIdx = a.indexOf(":");
      acc.push(a);
      return acc;
    }, []);

  result.concat(rest);
  console.log("Templates: ", result);
}

parseStr`
  max-height: 100%;
  display: flex;
  width: ${(width) => `${width}px`};
`;
