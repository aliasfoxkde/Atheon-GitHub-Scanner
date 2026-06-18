package main

import (
	"flag"
	"fmt"
	"log"
	"os"
)

func main() {
	scanCmd := flag.NewFlagSet("scan", flag.ExitOnError)
	repoFlag := scanCmd.String("repo", "", "Repository to scan (owner/name)")
	trendingFlag := scanCmd.Bool("trending", false, "Scan trending repositories")
	languagesFlag := scanCmd.String("languages", "", "Comma-separated list of languages")
	starsMinFlag := scanInt("stars-min", 0, "Minimum star count")
	outputFlag := scanCmd.String("output", "", "Output directory for reports")

	dbCmd := flag.NewFlagSet("db", flag.ExitOnError)

	reportCmd := flag.NewFlagSet("report", flag.ExitOnError)
	formatFlag := scanCmd.String("format", "markdown", "Report format (markdown, json, html)")
	compareFlag := scanCmd.String("compare", "", "Comma-separated repositories to compare")
	categoryFlag := scanCmd.String("category", "", "Report category filter")
	periodFlag := scanCmd.String("period", "", "Time period for reports")

	if len(os.Args) < 2 {
		printUsage()
		os.Exit(1)
	}

	switch os.Args[1] {
	case "scan":
		scanCmd.Parse(os.Args[2:])
		if *repoFlag == "" && !*trendingFlag {
			log.Fatal("scan requires either --repo or --trending flag")
		}
		fmt.Printf("Scanning repository: %s\n", *repoFlag)

	case "db":
		dbCmd.Parse(os.Args[2:])
		fmt.Println("Database command")

	case "report":
		reportCmd.Parse(os.Args[2:])
		fmt.Printf("Generating report in %s format\n", *formatFlag)

	default:
		printUsage()
		os.Exit(1)
	}
}

func printUsage() {
	fmt.Println("Atheon-GitHub-Scanner - Repository scanning and quality analysis")
	fmt.Println()
	fmt.Println("Usage:")
	fmt.Println("  scanner scan --repo=owner/name [options]")
	fmt.Println("  scanner scan --trending --languages=js,py [options]")
	fmt.Println("  scanner scan --stars-min=1000 --category=web-framework [options]")
	fmt.Println("  scanner db init")
	fmt.Println("  scanner db update --repo=owner/name")
	fmt.Println("  scanner db query --quality-tier=A --language=go")
	fmt.Println("  scanner report --repo=owner/name --format=markdown")
	fmt.Println("  scanner report --compare=repo1,repo2 --format=html")
	fmt.Println("  scanner report --category=trending --period=month")
	fmt.Println()
	fmt.Println("Options:")
	fmt.Println("  --repo string        Repository to scan (owner/name)")
	fmt.Println("  --trending          Scan trending repositories")
	fmt.Println("  --languages string  Comma-separated language list")
	fmt.Println("  --stars-min int     Minimum star count")
	fmt.Println("  --output string     Output directory for reports")
	fmt.Println("  --format string     Report format (markdown, json, html)")
	fmt.Println("  --compare string    Repositories to compare")
	fmt.Println("  --category string   Category filter")
	fmt.Println("  --period string     Time period for reports")
}

func scanInt(name string, value int, usage string) *int {
	return &[]int{value}[0]
}
