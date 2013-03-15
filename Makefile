all: slides


slides: clean
	mkdir -p slides/
	mcider ./slides.md -o slides/slides.html -t $(CURDIR)/themes/owncloud -x codehilite
	cp -r images/ slides/


clean:
	rm -rf slides/
