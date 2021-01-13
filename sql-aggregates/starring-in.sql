select "cat"."name" as "category",
  count("f".*) as "numOfFilms"
  from  "categories" as "cat"
  join "filmCategory" using ("categoryId")
  join "films" as "f" using ("filmId")
  join "castMembers" using ("filmId")
  join "actors" using ("actorId")
  where "actors"."lastName" = 'Monroe' and "actors"."firstName" = 'Lisa'
  group by "cat"."categoryId";
