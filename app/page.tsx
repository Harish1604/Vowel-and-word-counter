"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function TextAnalyzer() {
  const [text, setText] = useState("")

  // Function to count vowels (a, e, i, o, u - case insensitive)
  const countVowels = (inputText: string): number => {
    const vowels = inputText.match(/[aeiouAEIOU]/g)
    return vowels ? vowels.length : 0
  }

  // Function to count words (split by whitespace and filter empty strings)
  const countWords = (inputText: string): number => {
    const words = inputText
      .trim()
      .split(/\s+/)
      .filter((word) => word.length > 0)
    return inputText.trim() === "" ? 0 : words.length
  }

  const vowelCount = countVowels(text)
  const wordCount = countWords(text)

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="mx-auto max-w-2xl space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">Text Analyzer</h1>
          <p className="text-muted-foreground">Enter text below to analyze vowels and word count in real-time</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Text Input</CardTitle>
            <CardDescription>Type or paste your text here to see the analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="text-input">Your Text</Label>
              <Textarea
                id="text-input"
                placeholder="Start typing your text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="min-h-32 resize-none"
              />
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Vowel Count</CardTitle>
              <CardDescription>Number of vowels (a, e, i, o, u)</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{vowelCount}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Word Count</CardTitle>
              <CardDescription>Number of words in the text</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{wordCount}</div>
            </CardContent>
          </Card>
        </div>

        {text && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Analysis Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  <span className="font-medium">Characters:</span> {text.length}
                </p>
                <p>
                  <span className="font-medium">Characters (no spaces):</span> {text.replace(/\s/g, "").length}
                </p>
                <p>
                  <span className="font-medium">Vowel percentage:</span>{" "}
                  {text.length > 0 ? ((vowelCount / text.length) * 100).toFixed(1) : 0}%
                </p>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
