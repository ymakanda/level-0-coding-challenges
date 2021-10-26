function areaOfaTriangle(s1, s2, s3) {
  const s = (s1 + s2 + s3) / 2;
  return Math.sqrt(s * (s - s1) * (s - s2) * (s - s3));
}
areaOfaTriangle(3, 4, 5);
