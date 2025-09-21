const CELL_SIZE = 16
const BLOCKED_POSITIONS = new Set();
const INTERACTION_POSITIONS = new Set();

// Upper Pillar
BLOCKED_POSITIONS.add("272,352");
BLOCKED_POSITIONS.add("272,336");
BLOCKED_POSITIONS.add("288,352");
BLOCKED_POSITIONS.add("288,336");

// Lower Pillar
BLOCKED_POSITIONS.add("272,432");
BLOCKED_POSITIONS.add("272,448");
BLOCKED_POSITIONS.add("288,432");
BLOCKED_POSITIONS.add("288,448");

// Left entrance
BLOCKED_POSITIONS.add("80,384");
BLOCKED_POSITIONS.add("80,400");
BLOCKED_POSITIONS.add("96,384");
BLOCKED_POSITIONS.add("96,400");

// Lower entrance
BLOCKED_POSITIONS.add("320,576");
BLOCKED_POSITIONS.add("320,592");
BLOCKED_POSITIONS.add("336,576");
BLOCKED_POSITIONS.add("336,592");

// Right entrance
BLOCKED_POSITIONS.add("544,384");
BLOCKED_POSITIONS.add("544,400");
BLOCKED_POSITIONS.add("560,384");
BLOCKED_POSITIONS.add("560,400");

// Walls
for(i = 256; i <= 496; i += CELL_SIZE) {
    BLOCKED_POSITIONS.add("32," + i);
}

for(i = 48; i <= 224; i += CELL_SIZE) {
    BLOCKED_POSITIONS.add(i + ",496");
}

for(i = 512; i <= 672; i += CELL_SIZE) {
    BLOCKED_POSITIONS.add("224," + i);
}

for(i = 240; i <= 432; i += CELL_SIZE) {
    BLOCKED_POSITIONS.add(i + ",672");
}

for(i = 496; i <= 672; i += CELL_SIZE) {
    BLOCKED_POSITIONS.add("448," + i);
}

for(i = 112; i <= 304; i += CELL_SIZE) {
    BLOCKED_POSITIONS.add("656," + i);
}

for(i = 288; i <= 640; i += CELL_SIZE) {
    BLOCKED_POSITIONS.add(i + ",112");
}

for(i = 112; i <= 288; i += CELL_SIZE) {
    BLOCKED_POSITIONS.add("272," + i);
}

BLOCKED_POSITIONS.add("256,288");

BLOCKED_POSITIONS.add("240,288");
BLOCKED_POSITIONS.add("240,272");
BLOCKED_POSITIONS.add("240,256");

for(i = 48; i <= 224; i += CELL_SIZE) {
    BLOCKED_POSITIONS.add(i + ",256");
}

// Special walls
BLOCKED_POSITIONS.add("432,288");
BLOCKED_POSITIONS.add("368,288");
BLOCKED_POSITIONS.add("288,288");

// Holes
for(i = 304; i <= 352; i += CELL_SIZE) {
    BLOCKED_POSITIONS.add(i + ",304");
}

for(i = 448; i <= 640; i += CELL_SIZE) {
    BLOCKED_POSITIONS.add(i + ",304");
}

BLOCKED_POSITIONS.add("448,320");
BLOCKED_POSITIONS.add("448,336");
BLOCKED_POSITIONS.add("352,320");
BLOCKED_POSITIONS.add("352,336");
BLOCKED_POSITIONS.add("304,320");

for(i = 304; i <= 352; i += CELL_SIZE) {
    BLOCKED_POSITIONS.add(i + ",352");
}

for(i = 448; i <= 608; i += CELL_SIZE) {
    BLOCKED_POSITIONS.add(i + ",352");
}

for(i = 368; i <= 416; i += CELL_SIZE) {
    BLOCKED_POSITIONS.add("608," + i);
}

for(i = 304; i <= 352; i += CELL_SIZE) {
    BLOCKED_POSITIONS.add(i + ",432");
}

for(i = 448; i <= 608; i += CELL_SIZE) {
    BLOCKED_POSITIONS.add(i + ",432");
}

for(i = 448; i <= 512; i += CELL_SIZE) {
    BLOCKED_POSITIONS.add("352," + i);
}

BLOCKED_POSITIONS.add("448,448");
BLOCKED_POSITIONS.add("448,464");
BLOCKED_POSITIONS.add("448,480");

BLOCKED_POSITIONS.add("304,464");
BLOCKED_POSITIONS.add("304,480");

for(i = 240; i <= 304; i += CELL_SIZE) {
    BLOCKED_POSITIONS.add(i + ",496");
}

for(i = 240; i <= 336; i += CELL_SIZE) {
    BLOCKED_POSITIONS.add(i + ",512");
}

//
INTERACTION_POSITIONS.add("80,272");
INTERACTION_POSITIONS.add("96,272");