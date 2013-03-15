all: slides


slides: clean
	mkdir -p build/
	mcider ./slides.md -b -o build/slides.html -t $(CURDIR)/themes/owncloud/


clean:
	rm -rf build/
