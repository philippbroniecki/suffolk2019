rm(list=ls(all=TRUE))

# setup common knitr  options
knitr::opts_knit$set(
  root.dir = "docs"
)

knitr::opts_chunk$set(
  comment = ""
)

chapter_header <- function(week) {
  if (knitr::opts_knit$get("rmarkdown.pandoc.to") == "html")
    cat(sprintf(readLines("../../include/header_toolbar.html"),
                as.integer(week)))
}
