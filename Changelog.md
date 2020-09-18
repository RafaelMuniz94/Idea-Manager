# [0.0.5] - 18/09/2020
## Add TypeORM dependecy
## Add PG dependecy
## Add Cors dependecy
## Create Migrations
## Create Users base Model
## Create ORM Configuration File

**Changed Files**

        modified:   .gitignore
        new file:   BackEnd/IdeaManager-API/ormconfig-example.json
        modified:   BackEnd/IdeaManager-API/package.json
        new file:   BackEnd/IdeaManager-API/src/database/index.ts
        new file:   BackEnd/IdeaManager-API/src/database/migrations/1600395257061-CreateIdeaTable.ts
        new file:   BackEnd/IdeaManager-API/src/database/migrations/1600397174416-CreateTechTable.ts
        new file:   BackEnd/IdeaManager-API/src/database/migrations/1600398157932-CreateTableUser.ts
        new file:   BackEnd/IdeaManager-API/src/database/migrations/1600398909926-CreateTableRelationIdeaTech.ts
        new file:   BackEnd/IdeaManager-API/src/database/migrations/1600400662910-CreateTableRelationUsersIdeas.ts
        modified:   BackEnd/IdeaManager-API/src/models/Idea.ts
        new file:   BackEnd/IdeaManager-API/src/models/Users.ts
        modified:   BackEnd/IdeaManager-API/src/server.ts
        modified:   BackEnd/IdeaManager-API/src/services/ideaServices/index.ts
        modified:   BackEnd/IdeaManager-API/tsconfig.json
        modified:   BackEnd/IdeaManager-API/yarn-error.log
        modified:   BackEnd/IdeaManager-API/yarn.lock
        modified:   Changelog.md

---

# [0.0.4] - 30/08/2020
## Changed Find by Id to Find by Alias
## Changed Route Update by Id to Update by Alias

**Changed Files**

        modified:   .gitignore
        modified:   BackEnd/IdeaManager-API/src/models/Idea.ts
        modified:   BackEnd/IdeaManager-API/src/repositories/IdeaRepository.ts
        modified:   BackEnd/IdeaManager-API/src/routes/idea.routes.ts
        renamed:    BackEnd/IdeaManager-API/src/services/ideaServices/UpdateIdeaByNameService.ts -> BackEnd/IdeaManager-API/src/services/ideaServices/UpdateIdeaByAliasService.ts
        modified:   BackEnd/IdeaManager-API/src/services/ideaServices/index.ts
        modified:   Changelog.md

---

# [0.0.3] - 30/08/2020
## Idea Routes Update
## Router Log fix

**Changed Files**

        modified:   BackEnd/IdeaManager-API/src/routes/idea.routes.ts
        modified:   BackEnd/IdeaManager-API/src/routes/index.ts
        modified:   BackEnd/IdeaManager-API/src/services/ideaServices/index.ts
        modified:   Changelog.md

---

# [0.0.2] - 30/08/2020
## Inclusion of Json in all routes
## Creation of Idea Services
## Creation of Idea Creation Service
## Creation of Idea Update Service by Name
## Route to return all Ideas
## Route to return Idea by ID

**Changed Files**

        modified:   BackEnd/IdeaManager-API/package.json
        new file:   BackEnd/IdeaManager-API/src/models/Idea.ts
        new file:   BackEnd/IdeaManager-API/src/models/Tech.ts
        new file:   BackEnd/IdeaManager-API/src/repositories/IdeaRepository.ts
        modified:   BackEnd/IdeaManager-API/src/routes/idea.routes.ts
        modified:   BackEnd/IdeaManager-API/src/routes/index.ts
        modified:   BackEnd/IdeaManager-API/src/server.ts
        new file:   BackEnd/IdeaManager-API/src/services/ideaServices/CreateIdeaService.ts
        new file:   BackEnd/IdeaManager-API/src/services/ideaServices/UpdateIdeaByNameService.ts
        new file:   BackEnd/IdeaManager-API/src/services/ideaServices/index.ts
        new file:   BackEnd/IdeaManager-API/yarn-error.log
        modified:   BackEnd/IdeaManager-API/yarn.lock
        modified:   Changelog.md

---

# [0.0.1] - 30/08/2020
## Initial Commmit 
## Folder Structure Creation 
## Server Criation 
## Typescript Config 
## Log Service Creation 
## Idea Route Creation


**Changed Files**

        new file:   .gitignore
        new file:   BackEnd/IdeaManager-API/package.json
        new file:   BackEnd/IdeaManager-API/src/routes/idea.routes.ts
        new file:   BackEnd/IdeaManager-API/src/routes/index.ts
        new file:   BackEnd/IdeaManager-API/src/server.ts
        new file:   BackEnd/IdeaManager-API/src/services/CreateMessageLogRoutesService.ts
        new file:   BackEnd/IdeaManager-API/tsconfig.json
        new file:   BackEnd/IdeaManager-API/yarn.lock
        new file:   Changelog.md