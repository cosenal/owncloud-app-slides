all: slides


slides: clean
	mkdir -p build/
	mcider ./slides.md -o build/slides.html -t $(CURDIR)/themes/owncloud -x codehilite



clean:
	rm -rf build/*
