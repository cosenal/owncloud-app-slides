all: slides


slides: clean
	mkdir -p slides/
	mcider ./slides.md -o slides/slides.html -t $(CURDIR)/themes/owncloud -x codehilite



clean:
	rm -rf slides/
