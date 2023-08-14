export default function character(object) {
  if (object.health > 50 && object.health <= 100) {
    return 'healthy';
  }
  if (object.health <= 50 && object.health >= 15) {
    return 'wounded';
  }
  if (object.health < 15) {
    return 'critical';
  }
  return 0;
}
