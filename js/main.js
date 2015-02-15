var blueberries = {
  name: 'blueberries',
  species: 'Vaccinium corybosum',
  growsOnShrub: true,
  energy: '240 kJ',
  carbohydrates: '14.49 g',
  protein: '0.74 g',
};

var grapes = {
  name: 'grapes',
  species: 'vitis vinifera',
  growsOnShrub: false,
  energy: '288 kJ',
  carbohydrates: '18.1 g',
  protein: '0.72 g',
};

var redCurrant = {
  name: 'red currant',
  species: 'Ribes rubrum',
  growsOnShrub: true,
  energy: '234 kJ',
  carbohydrates: '13.8 g',
  protein: '1.4 g',
};

var fruit = [blueberries, grapes, redCurrant];

var checkShrub = function (check) {
  if(check){
    return 'Yes';
	} else {
      return 'No';
	}
}

var writeFruit = function (fruit) {
	fruit.forEach(function (item, i) {
      var berry = ['blueberries', 'grapes', 'red-currant'];
      document.write('<div class="unit unit-xs-1 unit-m-1-3 berry ' + berry[i] + '"><div class="whitebg">');
      document.write('<h2 class="heading">' + item.name + '</h2>');
      document.write('<dl class="list">');
      document.write('<dt>Species:</dt><dd>' + item.species + '</dd>');
      document.write('<dt>Grows on shrub:</dt><dd>' + checkShrub(item.growsOnShrub) + '</dd>');
      document.write('<dt>Energy:</dt><dd>' + item.energy + '</dd>');
      document.write('<dt>Carbohydrates:</dt><dd>' + item.carbs + '</dd>');
      document.write('<dt>Protein:</dt><dd>' + item.protein + '</dd>');
      document.write('</dl>');
      document.write('</div></div>');
});

};

writeFruit(fruit); 