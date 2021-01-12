select "c"."firstName" as "customer",
  "c"."lastName",
  "p"."amount" as "payment",
  "a"."line1" as "address",
  "a"."line1",
  "a"."district",
  "cc"."name" as "city",
  "ccc"."name" as "country"
  from "payments" as "p"
  join "customers" as "c" using ("customerId")
  join "addresses" as "a" using ("addressId")
  join "cities" as "cc" using ("cityId")
  join "countries" as "ccc" using ("countryId")
  where "amount" > '10.99';
