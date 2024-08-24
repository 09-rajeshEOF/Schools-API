function calculateDistance(lt1, ln1, lt2, ln2) {
    const earthRad = 6371;
    const distanceLt = deg2rad(lt2 - lt1);
    const distanceLn = deg2rad(ln2 - ln1);
    const a =
      Math.sin(distanceLt / 2) * Math.sin(distanceLt / 2) +
      Math.cos(deg2rad(lt1)) *
        Math.cos(deg2rad(lt2)) *
        Math.sin(distanceLn / 2) *
        Math.sin(distanceLn / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRad * c;
    return distance;
  }
  
  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }
  
  module.exports = calculateDistance;
  
  
  