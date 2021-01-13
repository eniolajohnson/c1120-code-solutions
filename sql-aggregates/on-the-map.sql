select "c"."name" as "country",
  count(*) as "totalNumOfCities"
  from  "cities"
  join "countries" as "c" using ("countryId")
  group by "c"."name";
