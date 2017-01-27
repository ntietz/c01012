import json

# We will just go with this: https://en.wikipedia.org/wiki/Hexspeak
# So we can also support: o, i, l, s, t, g.
# We can support R but it takes 2 characters.

char_weight = {
  'A': 'A',
  'B': 'B',
  'C': 'C',
  'D': 'D',
  'E': 'E',
  'F': 'F',
  'O': '0',
  'I': '1',
  'L': '1',
  'S': '5',
  'T': '7',
  'G': '9',
  'R': '12'
}

substring_weight = {
  'ATE': '8'
}

words = []

with open('/etc/dictionaries-common/words') as dictionary:
  for line in dictionary:
    word = line.strip().upper()
    color = word
    cost = 0

    for s, w in substring_weight.iteritems():
      if s in word:
        cost += (len(w) * word.count(s))
        color = color.replace(s, w)
        word = word.replace(s, '')

    for c in word:
      if c in char_weight:
        cost += len(char_weight[c])
        color = color.replace(c, char_weight[c])
      else:
        cost += 9999 # cannot make this word

    if cost == 3 or cost == 6:
      words.append({
        'word': line.strip().upper(),
        'color': color
      })

with open('www/js/data.js', 'w') as out:
  out.write('const words = %s' % json.dumps(words))

