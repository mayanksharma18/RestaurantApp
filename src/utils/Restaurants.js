/* eslint-disable no-console */
/* eslint-disable import/prefer-default-export */
const hotelRankNan =[];
export const customfilterKeys = (flilterByKey,data) => {
    const keyValues = new Set();
    data.forEach(element => {
        keyValues.add(element[flilterByKey]);
    })
    const sortKeysAlphaBeticallly = [...keyValues].sort();
    return sortKeysAlphaBeticallly;
}  

export const getRankingYears = (data) => {
    const years = new Set();
    data.forEach(element => {
        if (element['Top Ten'] === 'NaN') {
          hotelRankNan.push(element);
          return;
        }
        const getYearValue = element['Top Ten'].split(' ').splice(0,1);
        years.add(...getYearValue);
    })
    const sortYears = [...years].sort();
    console.log("hotelRankNan", hotelRankNan) 
    return sortYears;
}

export const fliterByYearRanking = (year, data) => {
  const ranks = [];
  const filteredResults=[];
  const results = data.filter(elem => elem['Top Ten'].split(' ')[0] === year);
  results.forEach(elem => {
    ranks.push(
      parseInt(
        elem['Top Ten']
          .split(' ')[1]
          .split('#')
          .splice(1, 1),
        10
      )
    );
  });
  ranks.sort((x,y)=>x-y);
  for(let i=0;i<ranks.length;i+=1) {
    for(let j=0;j<results.length;j+=1) {
      if(results[j]['Top Ten'] !== 'Nan') {
      const intV = parseInt(results[j]['Top Ten'].split(' ')[1].split('#').splice(1, 1),10)
       if(ranks[i] === intV) {
         filteredResults.push(results[j]);
       }
      }
    }
  }
  return  {[year] : {...filteredResults}};
};

export const datawithYearRankingSorted = (data) => {
  const sortedDataWithYear=[]
  const ranksArray = getRankingYears(data);
  ranksArray.forEach((elem) => {
    sortedDataWithYear.push(fliterByYearRanking(elem,data))
  })
  return sortedDataWithYear
}