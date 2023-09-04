# Data Playbook

## FEATURES

AS a user, I want to select a data source (mongo, sql, elastic, etc)\
THEN select a collection\
AND add filtering\
AND choose columns\
SO THAT I can display only the informations I really need.

AS a user, I want to select a data source (mongo, sql, elastic, etc)\
THEN select 2 collections C1, C2\
AND choose C1 columns\
AND add filtering for C1\
AND link them by a matching key\
AND choose C2 columns\
AND add filtering for C2\
SO THAT I can enrich C1 informations with C2 informations in one new data collection.

AS a user, I want to manipulate collections from a data source\
AND save the resulting collection as a new collection in the given data source\
SO THAT I can have it without recalculating it if i need it multiple times.

AS a user, I want to select a data source\
THEN select a collection\
AND aggregate datas by a key\
AND aggregate ...\
SO That i can get metrics about the collection.
