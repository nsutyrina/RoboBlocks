export const forBlock = Object.create(null);

forBlock['moon_walk_left'] = function (block, generator) {
  const steps = generator.valueToCode(block, 'STEPS', generator.ORDER_ATOMIC) || '0';
  const t = generator.valueToCode(block, 'T', generator.ORDER_ATOMIC) || '0';

  const code = `moonWalkLeft(${steps}, ${t});\n`;
  return code;
};
