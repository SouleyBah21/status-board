Problem
Teams sometimes dont know who’s online or available without messaging around.

Solution
A simple status board where anyone can post their availability.

Tools
Cloudflare Pages (frontend)
Cloudflare Workers (API)
In memory storage (no database)

How it works
Users select a name and status
Worker stores it in memory and serves it to others

