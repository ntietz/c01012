# We will just go with this: https://en.wikipedia.org/wiki/Hexspeak
# So we can also support: o, i, l, s, t, g.
# We can support R but it takes 2 characters.

char_weight = {
  'A': 1,
  'B': 1,
  'C': 1,
  'D': 1,
  'E': 1,
  'F': 1,
  'O': 1,
  'I': 1,
  'L': 1,
  'S': 1,
  'T': 1,
  'G': 1,
  'R': 2
}

substring_weight = {
  'ATE': 1
}

with open('/etc/dictionaries-common/words') as dictionary:
  for line in dictionary:
    word = line.strip().upper()
    cost = 0

    for s, w in substring_weight.iteritems():
      if s in word:
        cost += (w * word.count(s))
        word = word.replace(s, '')

    for c in word:
      if c in char_weight:
        cost += char_weight[c]
      else:
        cost += 9999 # cannot make this word

    if cost == 3 or cost == 6:
      print line.strip().upper()

