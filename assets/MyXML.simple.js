/*
This file was used to get values from a
XML file. Although it can be used for a
HTML file, it's more recommended to use
a XML file.
*/
var myXML = {
  select: function(va, elem, index) {
    return va.getElementsByTagName(elem)[index];
  },
  getChildNodeValue: function(obj, index) {
    return obj.childNodes[index].value;
  }
}
