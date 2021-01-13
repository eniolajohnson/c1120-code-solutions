select "f"."title",
  "f"."replacementCost",
  sum("f"."replacementCost") as "replacementCostTotal",
  sum("f"."replacementCost") - "f"."replacementCost" as "profit"
  from "films" as "f"
  join "inventory" using ("filmId")
  group by "f"."filmId"
  order by "replacementCostTotal" desc
  limit 5;
