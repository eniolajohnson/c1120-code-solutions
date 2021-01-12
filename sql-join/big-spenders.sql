select "c"."firstName" as "customer",
  "c"."lastName",
  "p"."amount" as "payment"
  from "customers" as "c"
  join "payments" as "p" using ("customerId")
  where "amount" > '10.99';
