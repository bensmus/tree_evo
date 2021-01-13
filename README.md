# Evolution simulation

The goal of this project is to make a simple evolution simulation. Randomly generated PIXEL TREES grow in a WRAP AROUND FOREST, and reproduce depending on whether or not they are the most successful in gathering sunlight. The reason why the trees aren't just flat "solar panels" is because there is limited space, and they can block each other's sun. Trees cannot grow through each other.

Tree parameters are 
- how often they decide to grow up vs sideways
- the distribution of new growth locations (how many "new shoots" are near the top vs near the bottom of the tree)
- the absorb of the tree leaves (more absorb means that they block more light and absorb more light)

Absorb of a tree leaf is a number between 0 and 1. The passthrough of a tree leaf is 1.2 - absorb. 

E.g absorb=0.5, passthrough=0.7
For heavily layered tree sections, a lower absorb makes sense

Each tree is assigned a sufficiently different color from its neighboring trees, and the absorb of a tree leaf is made visible by the lightness of our color (S_hsl = 1000, while L_hsl changes). Hue has to be at least 40 degrees apart. In JavaScript, hsl(335, 100%, 50%) is the accepted format. 

# Resources

https://www.w3schools.com/graphics/canvas_intro.asp 

