FROM python:3
ENV PYTHONUNBUFFERED 1

# Set the working dir.
WORKDIR /website
ADD . /website

# Install required system libs (so pip install succeeds)
RUN apt-get update
RUN apt-get install -y libmysqlclient-dev
RUN apt-get install -y gcc

# Install server-side dependencies
RUN pip install -r requirements.txt

EXPOSE 8000

# Run Python's dev web server when the container launches
CMD ["/website/manage.py", "runserver", "0.0.0.0:8000"]
