export function filterKeys (flilterByKey,data) {
    const keyValues = new Set();
    data.forEach(element => {
        keyValues.add(element[flilterByKey]);
    })
    const sortKeysAlphaBeticallly = [...keyValues].sort();
    return sortKeysAlphaBeticallly;
}  

export function getRankingYears (data) {
    const years = new Set();
    const hotelWithRankNan =[];
    data.forEach(element => {
        if (element['Top Ten'] === 'NaN') {
          hotelWithRankNan.push(element);
          return;
        }
        const getYearValue = element['Top Ten'].split(' ').splice(0,1);
        years.add(...getYearValue);
    })
    const sortedYears = [...years].sort();
    return {sortedYears,hotelWithRankNan};
}


export function generateDataWithYearRankings (ranks,results,year) {
  const filteredResults=[];
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
}

export const fliterByYearRanking = (year, data) => {
  const ranks = [];
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
  return generateDataWithYearRankings(ranks,results,year);
};

export function datawithYearRankingSorted (data) {
  const sortedDataWithYear = [];
  const yearWiseRanksArray = getRankingYears(data);
  const hotelWithNoRanks = { 'NaN' : yearWiseRanksArray.hotelWithRankNan}
  yearWiseRanksArray.sortedYears.forEach((year) => {
    sortedDataWithYear.push(fliterByYearRanking(year,data))
  })
  sortedDataWithYear.push(hotelWithNoRanks)
  return sortedDataWithYear
}