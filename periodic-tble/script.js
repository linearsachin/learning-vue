const elementsName=[ "Hydrogen", "Helium",
                    "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", 
                    "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", 
                    "Potassium", "Calcium", "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", 
                    "Rubidium", "Strontium", "Yttrium", "Zirconium", "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", "Antimony", "Tellurium", "Iodine", "Xenon", 
                    "Cesium", "Barium","Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", 
                    "Francium", "Radium","Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", "Meitnerium","Darmstadtium","Roentgenium","Copernicium","Nihonium","Flerovium","Moscovium","Livermorium","Tennessine","Oganesson",
                    "Lanthanum", "Cerium", "Praseodymium", "Neodymium", "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium","Lutetium", 
                    "Actinium", "Thorium", "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", "Fermium", "Mendelevium", "Nobelium","Lawrencium",];

const elementsSymbol = [ "H", "He", 
                    "Li", "Be", "B", "C", "N","O", "F", "Ne", 
                    "Na", "Mg", "Al", "Si", "P", "S", "Cl", "Ar", 
                    "K", "Ca", "Sc", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr", 
                    "Rb", "Sr", "Y", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe", 
                    "Cs", "Ba",  "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn", 
                    "Fr", "Ra",  "Rf", "Db", "Sg", "Bh", "Hs", "Mt","Ds","Rg","Cn","Nh","Fl","Mc","Lv","Ts","Og",
                    "La", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb","Lu",
                    "Ac", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No","Lr", ];
const elementBlock = [ "s polyatomic-nonmetal", "p noble", 
                    "s alkali", "s alkali-earth", "p metalloid", "p", "p","p", "p halo","p noble", 
                    "s alkali", "s alkali-earth", "p", "p metalloid", "p", "p", "p halo", "p noble", 
                    "s alkali", "s alkali-earth", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "p", "p metalloid", "p metalloid", "p", "p halo", "p noble", 
                    "s alkali", "s alkali-earth", "d", "d", "d", "d", "d", "d", "d", "d", "d", "d", "p", "p", "p metalloid", "p metalloid", "p halo", "p noble", 
                    "s alkali", "s alkali-earth", "d", "d", "d", "d", "d", "d", "d", "d", "d", "p", "p", "p", "p metalloid", "p halo", "p noble", 
                    "s alkali", "s alkali-earth", "d", "d", "d", "d", "d", "d", "d", "d", "d", "p", "p", "p", "p", "p halo", "p noble",
                    "f lan", "f lan", "f lan", "f lan", "f lan", "f lan", "f lan", "f lan", "f lan", "f lan", "f lan", "f lan", "f lan", "f lan", "f lan",
                    "f act", "f act", "f act", "f act", "f act", "f act", "f act", "f act", "f act", "f act", "f act", "f act", "f act", "f act", "f act", ];
new Vue ({
    el:"#app",
    data:{
        name:"sachin",
        last_name:"yadav",
        columns: [1,2,-1,3,4,5,6,7,8,9,10,11,12,-1,13,14,15,16,17,18],
        rows: [4,5,6,7],
        elements: elementsName,
        symbols: elementsSymbol,
        blocks: elementBlock,
    }
})



// ele_name = document.getElementsByClassName('ele');
// ele_atno = document.getElementsByClassName('atomic-number')
// for (let index = 0; index < ele_name.length; index++) {
//     ele_name[index].innerHTML=spdelements[index]
//     ele_atno[index].innerHTML=elementsSymbol[index]
// }