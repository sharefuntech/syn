#!/usr/bin/env python
#coding=utf-8
"""
    Author:         Anemone
    Filename:       writetopdf.py
    Last modified:  2015-02-20 19:19
    E-mail:         anemone@82flex.com

"""

#coding=utf-8
import reportlab.rl_config
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

from reportlab.lib import fonts

import copy

from reportlab.platypus import Paragraph, SimpleDocTemplate,flowables
from reportlab.lib.styles import getSampleStyleSheet

import crawler

def writePDF(issue,duzhe):
    reportlab.rl_config.warnOnMissingFontGlyphs = 0

    pdfmetrics.registerFont(TTFont('song',"simsun.ttc"))
    pdfmetrics.registerFont(TTFont('hei',"msyh.ttc"))

    fonts.addMapping('song', 0, 0, 'song')
    fonts.addMapping('song', 0, 1, 'song')
    fonts.addMapping('song', 1, 0, 'hei')
    fonts.addMapping('song', 1, 1, 'hei')

    stylesheet=getSampleStyleSheet()
    normalStyle = copy.deepcopy(stylesheet['Normal'])
    normalStyle.fontName ='song'
    normalStyle.fontSize = 11
    normalStyle.leading = 11
    normalStyle.firstLineIndent = 20

    titleStyle = copy.deepcopy(stylesheet['Normal'])
    titleStyle.fontName ='song'
    titleStyle.fontSize = 15
    titleStyle.leading = 20

    firstTitleStyle = copy.deepcopy(stylesheet['Normal'])
    firstTitleStyle.fontName ='song'
    firstTitleStyle.fontSize = 20
    firstTitleStyle.leading = 20
    firstTitleStyle.firstLineIndent = 50

    smallStyle = copy.deepcopy(stylesheet['Normal'])
    smallStyle.fontName ='song'
    smallStyle.fontSize = 8
    smallStyle.leading = 8

    story = []

    story.append(Paragraph("<b>读者{0}期</b>".format(issue), firstTitleStyle))

    for eachColumn in duzhe:
        story.append(Paragraph('__'*28, titleStyle))
        story.append(Paragraph('<b>{0}</b>'.format(eachColumn), titleStyle))
        for eachArticle in duzhe[eachColumn]:
            story.append(Paragraph(eachArticle["title"],normalStyle))
    story.append(flowables.PageBreak())

    for eachColumn in duzhe:
        for eachArticle in duzhe[eachColumn]:
            story.append(Paragraph("<b>{0}</b>".format(eachArticle["title"]),titleStyle))
            story.append(Paragraph(" {0}  {1}".format(eachArticle["writer"],eachArticle["from"]),smallStyle))
            para=eachArticle["context"].split("　　")
            for eachPara in para:
                story.append(Paragraph(eachPara,normalStyle))
            story.append(flowables.PageBreak())
    #story.append(Paragraph("context",normalStyle))
    doc = SimpleDocTemplate("duzhe"+issue+".pdf")
    print "Writing PDF..."
    doc.build(story)
def main(issue):
    duzhe=crawler.getCatalog(issue)
    writePDF(issue,duzhe)
if __name__ == '__main__':
    issue=raw_input("Enter issue(201501):")
    main(issue)


