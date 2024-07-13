Developed an ERP system that contains products, sales reps, and sales.<br/> It's a full-stack project.
## Technologies:
### Front-end
<div>
 <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?logo=tailwindcss&logoColor=white&style=for-the-badge" height="30" alt="Tailwind Css logo"/>
 <img src="https://img.shields.io/badge/Next JS-black?logo=next.js&logoColor=white&style=for-the-badge" height="30" alt="Next.js logo"/>
 <img src="https://img.shields.io/badge/Chart JS-eb3b58?logo=chart.js&logoColor=white&style=for-the-badge" height="30" alt="Chart.js logo"/>
</div>

### Back-end
<div>
 <img src="https://img.shields.io/badge/Express-dbd02c?logo=express&logoColor=black&style=for-the-badge" height="30" alt="Express logo"/>
 <img src="https://img.shields.io/badge/PostgreSQL-385a96?logo=postgresql&logoColor=white&style=for-the-badge" height="30" alt="PostgreSQL logo"/>
 <img src="https://img.shields.io/badge/Prisma-6562f0?logo=prisma&logoColor=white&style=for-the-badge" height="30" alt="Prisma logo"/>
</div>

*(under this need updated)*
## Requirements: 

## Steps:
Requirment: You have to install PostgreSQL in you computer
.1 Clone the project or you can download it.
.2 Before do anything with to the project, you have to create new to user it in the project, so open postgres in cmd: 
   .2.1 In Windows `psql -U postgres`
   In Linux (Ubuntu) `sudo -i -u postgres`, `psql`
   .2.2 Should shown something like this `postgres=# ` That mean that you opend postgres. Now to create new user run `CREATE USER theerp_user WITH PASSWORD '1234';`
   .2.3 The user have to be a SUPERUSER to has the permission in editing data, so run this command `ALTER USER theerp_user WITH SUPERUSER;`
   .2.4 Now you created user with SUPERUSER role, now to get out from postgres run `\q`
.3 To make the server get the configration of the user, move to 'server' dir, and copy paste the .env.example and rename it to .env, (Note: if you create another username or password change it in .env)
.4 You have to create database to use it in the project, so open the terminal and run `npx prisma migrate dev`
.5 Then run this `npm run start` To run the server
.6 Now open new terminal and move to 'client' dir, and run this:
`npm install`,
`npm run build && npm run start`
.7 Congratulation,  now open the browser the localhost:3000
